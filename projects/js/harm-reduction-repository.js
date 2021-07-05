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
  title.innerText =
    substance.name.charAt(0).toUpperCase() + substance.name.slice(1);
  infoContainer.appendChild(title);

  const linksList = document.createElement("ul");
  linksList.classList.add("list-group");
  linksList.classList.add("list-group");

  for (const link in substance.links) {
    let linkListItem = document.createElement("li");
    linkListItem.classList.add("list-group-item");
    linkListItem.classList.add("text-white", "bg-white");
    console.log(substance.links[link]);
    linkListItem.innerHTML =
      "<a href='" +
      substance.links[link] +
      "'>" +
      link +
      " | " +
      substance.links[link] +
      "</a>";
    linksList.appendChild(linkListItem);
  }

  infoContainer.appendChild(linksList);
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
