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

const shows = [
  new Show("Mon Sept 06 2021", "Ronald Lane", "San Francisco, CA"),
  new Show("Tue Sept 21 2021", "Pier 3 East", "San Francisco, CA"),
  new Show("Fri Oct 15 2021", "View Lounge", "San Francisco, CA"),
  new Show("Sat Nov 06 2021", "Hyatt Agency", "San Francisco, CA"),
  new Show("Fri Nov 26 2021", "Moscow Center", "San Francisco, CA"),
  new Show("Wed Dec 15 2021", "Press Club", "San Francisco, CA"),
];

shows.forEach((show) => {
  const trEl = document.createElement("tr");
  trEl.classList.add("table__row");

  const dateEl = document.createElement("td");
  ["table__data", "table__data--date"].forEach((className) =>
    dateEl.classList.add(className)
  );
  dateEl.textContent = show.getDate();
  trEl.append(dateEl);

  const venueEl = document.createElement("td");
  ["table__data", "table__data--venue"].forEach((className) =>
    venueEl.classList.add(className)
  );
  venueEl.textContent = show.getVenue();
  trEl.append(venueEl);

  const locationEl = document.createElement("td");
  ["table__data", "table__data--location"].forEach((className) =>
    locationEl.classList.add(className)
  );
  locationEl.textContent = show.getLocation();
  trEl.append(locationEl);

  const buttonTdEl = document.createElement("td");
  ["table__data", "table__data--button"].forEach((className) =>
    buttonTdEl.classList.add(className)
  );
  trEl.append(buttonTdEl);

  const buttonEl = document.createElement("button");
  ["table__button"].forEach((className) => buttonEl.classList.add(className));
  buttonEl.textContent = "Buy Tickets";
  buttonTdEl.append(buttonEl);

  document.getElementById("table-body").append(trEl);
});

/*
<tr class="table__row">
    <th class="table__data table__data--date">Mon Sept 06 2021</th>
    <td class="table__data table__data--venue">Ronald Lane</td>
    <td class="table__data table__data--location">
    San Francisco, CA
    </td>
    <td class="table__data table__data--button">
        <button class="table__button">Buy Tickets</button>
    </td>
</tr>
*/
