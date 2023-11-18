// API instance
const API = new BandSiteAPI("3db530b6-a408-4f63-809d-22bc38a6b3ae");

async function startApp() {
  const RESPONSE = await API.getShows();
  RESPONSE.forEach((show) => {
    document.getElementById("table-body").append(getTableRowHTML(show));
  });
}
startApp();

function getTableRowHTML(show) {
  // Table Row
  const TR_EL = document.createElement("tr");
  TR_EL.classList.add("table__row");
  TR_EL.addEventListener("click", (e) => {
    onTableRowClick(e.target);
  });

  // Date Table Data
  const DATE_EL = document.createElement("td");
  ["table__data", "table__data--date"].forEach((className) =>
    DATE_EL.classList.add(className)
  );
  const DATE = new Date(show.date);
  DATE_EL.textContent = DATE.toDateString();
  TR_EL.append(DATE_EL);

  // Venue Table Data
  const VENUE_EL = document.createElement("td");
  ["table__data", "table__data--venue"].forEach((className) =>
    VENUE_EL.classList.add(className)
  );
  VENUE_EL.textContent = show.place;
  TR_EL.append(VENUE_EL);

  // Location Table Data
  const LOCATION_EL = document.createElement("td");
  ["table__data", "table__data--location"].forEach((className) =>
    LOCATION_EL.classList.add(className)
  );
  LOCATION_EL.textContent = show.location;
  TR_EL.append(LOCATION_EL);

  // Button Table Data
  const BUTTON_TD_EL = document.createElement("td");
  ["table__data", "table__data--button"].forEach((className) =>
    BUTTON_TD_EL.classList.add(className)
  );
  TR_EL.append(BUTTON_TD_EL);

  // Button
  const BUTTON_EL = document.createElement("button");
  BUTTON_EL.classList.add("table__button");
  BUTTON_EL.textContent = "Buy Tickets";
  BUTTON_TD_EL.append(BUTTON_EL);

  return TR_EL;
}

// Function to add active class to the clicked row
function onTableRowClick(eventTarget) {
  const ROW = eventTarget.closest("tr");
  const ROWS = document.querySelectorAll(".table__row");
  ROWS.forEach((row) => {
    row.classList.remove("table__row--active");
  });
  ROW.classList.add("table__row--active");
}
