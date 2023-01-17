// console.log('test')

export const loaded = function(){ 
    // console.log('got this far')
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category:Language_families&cmlimit=500",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var families = data.query.categorymembers;
            for (let i = 5; i < families.length; i++) {
                let family = families[i];
                let newLink= $('<a>',{
                href: 'https://en.wikipedia.org/wiki/' + family.title,
                text: family.title
                });
                // console.log(family.title + ": " + family.pageid);
                // childFinder(newLink)
                $('#families-list').append($('<li>').append(newLink));
            }
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        }
    });
}