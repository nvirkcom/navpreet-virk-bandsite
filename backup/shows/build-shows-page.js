class Show {
  constructor(date, location, venue) {
    this.date = date;
    this.location = location;
    this.venue = venue;
  }

  getDate() {
    return this.date;
  }

  getLocation() {
    return this.location;
  }

  getVenue() {
    return this.venue;
  }
}

const shows = getShows();
const showsTableBodyEl = document.querySelector("#shows-table-body");

shows.forEach((show) => addRowToTable(show));

function getShows() {
  return [
    new Show("Mon Sept 06 2021", "San Francisco, CA", "Ronald Lane"),
    new Show("Tue Sept 21 2021", "San Francisco, CA", "Pier 3 East"),
    new Show("Fri Oct 15 2021", "San Francisco, CA", "View Lounge"),
    new Show("Sat Nov 06 2021", "San Francisco, CA", "Hyatt Agency"),
    new Show("Fri Nov 26 2021", "San Francisco, CA", "Moscow Center"),
    new Show("Wed Dec 15 2021", "San Francisco, CA", "Press Club"),
  ];
}

function addRowToTable(showObj) {
  const rowEl = createRow(showObj);
  showsTableBodyEl.append(rowEl);
}

function createRow(showObj) {
  const tr = createEl({
    classList: "container shows-table__row",
    tagName: "tr",
  });

  const dateTd = createEl({
    classList: "shows-table__data",
    tagName: "td",
  });
  dateTd.append(
    createEl({
      classList: "shows-table__text shows-table__text--date",
      tagName: "strong",
      text: showObj.getDate(),
    })
  );

  const venueTd = createEl({
    classList: "shows-table__data",
    tagName: "td",
  });
  venueTd.append(
    createEl({
      classList: "shows-table__text shows-table__text--venue",
      tagName: "span",
      text: showObj.getVenue(),
    })
  );

  const locationTd = createEl({
    classList: "shows-table__data",
    tagName: "td",
  });
  locationTd.append(
    createEl({
      classList: "shows-table__text shows-table__text--location",
      tagName: "span",
      text: showObj.getLocation(),
    })
  );

  const buttonTd = createEl({
    classList: "shows-table__data shows-table__data--button",
    tagName: "td",
  });
  buttonTd.append(
    createEl({
      classList: "shows-table__button",
      tagName: "button",
      text: "Buy Tickets",
    })
  );

  tr.append(dateTd, venueTd, locationTd, buttonTd);
  return tr;
}
