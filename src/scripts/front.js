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
            var families = data.query.categorymembers;
            for (let i = 5; i < families.length; i++) {
                console.log(families[i])
                if (!families[i]['title'].includes('Category:')){
                    let family = families[i];
                    let newLink = document.createElement("a");
                    newLink.href = 'https://en.wikipedia.org/wiki/' + family.title;
                    newLink.textContent = family.title;
                    let newLi = document.createElement("li");
                    newLi.appendChild(newLink);
                    document.getElementById("families-list").appendChild(newLi);
                }
            }
        })
        .catch(error => console.log(error));
}
