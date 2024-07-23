
// document.addEventListener('DOMContentLoaded', () => {
//     let book1 = document.getElementById("img#book1");
//     const content1 = document.querySelector('div#book1');
//     var xhr;

//     function getContent(url) {
//         try{
//             xhr = new XMLHttpRequest();
//             xhr.open('GET', url, true);
//             xhr.onreadystatechange = () => {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     // var responseData = JSON.parse(xhr.responseText);
//                     // console.log(responseData);
//                     content1.innerHTML = xhr.responseText;
//                 }
//             };
//             xhr.send();
//         }catch(exception){
//             alert("request failed");
//         }
//     }
//     function clearContent() {
//         content1.innerHTML = '';
//     }

//     const url = [
//         'content.html'
//     ];

//     book1.addEventListener("mouseover", function() {
//         getContent(url[0]);
//     });
//     book1.addEventListener('mouseleave', function(){
//         clearContent();
//     })
// })
document.addEventListener('DOMContentLoaded', () => {
    let bookArea1 = document.getElementById("bookArea1");
    const content1 = document.getElementById('bookContent1');
    var xhr;

    function getContent(url) {
        try{
            xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    content1.innerHTML = xhr.responseText;
                }
            };
            xhr.send();
        } catch(exception){
            alert("request failed");
        }
    }

    function clearContent() {
        content1.innerHTML = '';
    }

    const url = [
        'content.html'
    ];

    bookArea1.addEventListener("mouseover", function() {
        getContent(url[0]);
    });

    bookArea1.addEventListener('mouseleave', function(){
        clearContent();
    });
});
