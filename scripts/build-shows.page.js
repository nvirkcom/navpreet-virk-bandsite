// Show Class
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

// Shows Array
const shows = [
  new Show("Mon Sept 06 2021", "Ronald Lane", "San Francisco, CA"),
  new Show("Tue Sept 21 2021", "Pier 3 East", "San Francisco, CA"),
  new Show("Fri Oct 15 2021", "View Lounge", "San Francisco, CA"),
  new Show("Sat Nov 06 2021", "Hyatt Agency", "San Francisco, CA"),
  new Show("Fri Nov 26 2021", "Moscow Center", "San Francisco, CA"),
  new Show("Wed Dec 15 2021", "Press Club", "San Francisco, CA"),
];

// Add Shows to DOM
shows.forEach((show) => {
  // Table Row
  const trEl = document.createElement("tr");
  trEl.classList.add("table__row");
  trEl.addEventListener("click", (e) => {
    onTableRowClick(e.target);
  });

  // Date Table Data
  const dateEl = document.createElement("td");
  ["table__data", "table__data--date"].forEach((className) =>
    dateEl.classList.add(className)
  );
  dateEl.textContent = show.getDate();
  trEl.append(dateEl);

  // Venue Table Data
  const venueEl = document.createElement("td");
  ["table__data", "table__data--venue"].forEach((className) =>
    venueEl.classList.add(className)
  );
  venueEl.textContent = show.getVenue();
  trEl.append(venueEl);

  // Location Table Data
  const locationEl = document.createElement("td");
  ["table__data", "table__data--location"].forEach((className) =>
    locationEl.classList.add(className)
  );
  locationEl.textContent = show.getLocation();
  trEl.append(locationEl);

  // Button Table Data
  const buttonTdEl = document.createElement("td");
  ["table__data", "table__data--button"].forEach((className) =>
    buttonTdEl.classList.add(className)
  );
  trEl.append(buttonTdEl);

  // Button
  const buttonEl = document.createElement("button");
  ["table__button"].forEach((className) => buttonEl.classList.add(className));
  buttonEl.textContent = "Buy Tickets";
  buttonTdEl.append(buttonEl);

  // Add Table Row to Table Body
  document.getElementById("table-body").append(trEl);
});

function onTableRowClick(eventTarget) {
  const row = eventTarget.closest("tr");
  const rows = document.querySelectorAll(".table__row");
  rows.forEach((row) => {
    row.classList.remove("table__row--active");
  });
  row.classList.add("table__row--active");
}
