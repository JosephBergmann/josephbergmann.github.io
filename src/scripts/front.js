// console.log('test')

// export const loaded = function(){ 
//     // console.log('got this far')
//     $.ajax({
//         url: "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category:Language_families&cmlimit=500",
//         type: "GET",
//         dataType: "json",
//         success: function (data) {
//             var families = data.query.categorymembers;
//             for (let i = 5; i < families.length; i++) {
//                 let family = families[i];
//                 let newLink= $('<a>',{
//                 href: 'https://en.wikipedia.org/wiki/' + family.title,
//                 text: family.title
//                 });
//                 // console.log(family.title + ": " + family.pageid);
//                 // childFinder(newLink)
//                 $('#families-list').append($('<li>').append(newLink));
//             }
//         },
//         error: function(xhr, status, error) {
//             console.log(xhr.responseText);
//         }
//     });
// }
export const loaded = function() {
    console.log('testing fetch');
    let categories = {};
    fetch("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category:Language_families&cmlimit=500")
        .then(response => response.json())
        .then(data => {
            debugger
            var families = data.query.categorymembers;
            for (let i = families.length - 1; i >= 5; i--) {
                // console.log(families[i])
                if (!families[i]['title'].includes('Category:')){
                    let family = families[i];
                    let newLink = document.createElement("a");
                    newLink.href = 'https://en.wikipedia.org/wiki/' + family.title;
                    newLink.textContent = family.title;
                    let newLi = document.createElement("li");
                    newLi.appendChild(newLink);
                    document.getElementById("families-list").appendChild(newLi);
                } else {
                    categories[families[i]['title'].slice('Category:'.length)] = families[i];
                }
            }
        })
        .catch(error => console.log(error));
}
// export const loaded = function() {
//     let categories = {};
//     fetch("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category:Language_families&cmlimit=500")
//         .then(response => response.json())
//         .then(data => {
//             var families = data.query.categorymembers;
//             for (let i = families.length - 1; i >= 5; i--) {
//                 if (!families[i]['title'].includes('Category:')){
//                     let family = families[i];
//                     let newLink = document.createElement("a");
//                     newLink.href = 'https://en.wikipedia.org/wiki/' + family.title;
//                     newLink.textContent = family.title;
//                     let newLi = document.createElement("li");
//                     newLi.appendChild(newLink);
//                     document.getElementById("families-list").appendChild(newLi);
//                 } else {
//                     categories[families[i]['title'].slice('Category:'.length)] = families[i];
//                 }
//             }
//             const links = document.querySelectorAll("a");
//             links.forEach(link => {
//                 link.addEventListener("click", function(event) {
//                     event.preventDefault(); // prevent the link from navigating to the page
//                     let category = categories[link.textContent];
//                     if (category) {
//                         console.log(`Getting links from ${category['title']}`);
//                         let url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=${category['title']}&cmlimit=500`;
//                         fetch(url)
//                             .then(response => response.json())
//                             .then(data => {
//                                 let links = data.query.categorymembers;
//                                 for (let i = 0; i < links.length; i++) {
//                                     let newLink = document.createElement("a");
//                                     newLink.href = 'https://en.wikipedia.org/wiki/' + links[i].title;
//                                     newLink.textContent = links[i].title;
//                                     let newLi = document.createElement("li");
//                                     newLi.appendChild(newLink);
//                                     document.getElementById("sub-families-list").appendChild(newLi);
//                                     }
//                                     })
//                                     .catch(error => console.log(error));
//                                     }
//                                     });
//                                     });
//                                     })
//                                     .catch(error => console.log(error));
// }
