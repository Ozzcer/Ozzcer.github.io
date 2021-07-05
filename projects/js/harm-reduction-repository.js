function substanceSearch() {
  const substance = {};
  substance.name = document.getElementById("substanceSearchText").value;
  substance.links = getLinks(substance);
  displaySubstanceData(substance);
}

function removeChildren(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

function getLinks(substance) {
  const links = {};
  links.psychonaut = PSYCHONAUT + substance.name;
  links.tripsit = TRIPSIT + substance.name;
  links.dancesafe = DANCESAFE + substance.name;
  links.erowid = EROWID + substance.name;
  return links;
}

function displaySubstanceData(substance) {
  removeChildren(infoContainer);

  const title = document.createElement("h4");
  title.classList.add("h4");
  title.textContent = substance.name;
  infoContainer.appendChild(title);

  const linksList = document.createElement("ul");
  linksList.classList.add("list-group");
  linksList.classList.add("list-group");

  for (const link in substance.links) {
    let linkListItem = document.createElement("li");
    linkListItem.classList.add("list-group-item");
    linkListItem.classList.add("text-white", "bg-white");
    linkListItem.innerHTML =
      "<a href='substance.links[link]'>" +
      link +
      " | " +
      substance.links[link] +
      "</a>";
    linksList.appendChild(linkListItem);
  }

  infoContainer.appendChild(linksList);

  // const table = document.createElement("table");
  // table.classList.add("table");
  // const thead = document.createElement("thead");
  // const tbody = document.createElement("tbody");
  // const theadRow = document.createElement("tr");

  // table.appendChild(thead);
  // table.appendChild(tbody);
  // thead.appendChild(theadRow);

  // infoContainer.appendChild(table);
}

function createTableStructure(tableTitle) {
  return table;
}

const PSYCHONAUT = "https://psychonautwiki.org/wiki/";
const TRIPSIT = "https://drugs.tripsit.me/";
const DANCESAFE = "https://dancesafe.org/";
const EROWID = "https://erowid.org/chemicals/";

const infoContainer = document.getElementById("infoContainer");

const substanceSearchButton = document.getElementById("substanceSearchBtn");
substanceSearchButton.addEventListener("click", function () {
  substanceSearch();
});
