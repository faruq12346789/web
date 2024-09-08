async function getData() {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data;
}

async function friendListsElement() {
  const friendLists = document.getElementById("friend_list");
  const data = await getData();
  const lists = `
      ${data.map(i => `
          <li>
              <figure class="card">
                  <div class="card_header">
                      <div class="card_image">
                          <img src="${i.fotoselfie}" alt="${i.nama}" width="100%">
                      </div>
                      <div class="card_description">
                          <span>${i.nama}</span>
                          <span>${parseInt(i.nim)}</span>
                      </div>
                  </div>
                  <figcaption class="card_content">
                      <span>TTL : ${i.ttl}</span>
                      <span>Alamat : ${i.alamat}</span>
                      <span>NoHP : ${i.no}</span>
                  </figcaption>
              </figure>
          </li>
      `).join("")}
  `;
  friendLists.innerHTML = lists;
}

friendListsElement();

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listener to profile box
document.getElementById("profileBox").addEventListener("click", topFunction);
