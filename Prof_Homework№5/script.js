/*1. Напишите функцию getTodos(username), которая в качестве аргумента принимает никнейм пользователя
(/users) и выводит список его задач (/todos).В качестве ответа в консоль выведите массив с задачами
указанного пользователя*/

// async function getTodos(userName) {
//     let usersTodos = [];
//     const urlUser = 'https://jsonplaceholder.typicode.com/users';
//     const urlTodos = 'https://jsonplaceholder.typicode.com/todos';
//     try{
//         let resUser = await fetch(urlUser);
//         let resTodos = await fetch(urlTodos);

//         let dataUser = await resUser.json();
//         let dataTodos = await resTodos.json();

//         dataUser.forEach(element => {
//             if (element.username == userName) {
//                 dataTodos.forEach(todo => {
//                     if (todo.userId == element.id) {
//                         usersTodos.push(todo.title);
//                     }
//                 })
//                 console.log(usersTodos);
//             }
//         });
//     }
//     catch{
//         console.log("Error, the user is not found");
//     }
// };
// getTodos("Bret")
// getTodos("Moriah.Stanton")

/*2. Напишите функцию getСomments(title), которая в качестве аргумента принимает заголовок поста (/posts) и 
выводит список всех его комментариев (/comments).В качестве ответа в консоль выведите массив с 
комментариями. Если у заданного поста комментариев нет, выведите в консоль соответствующее сообщение.
 */

// async function getComment(title) {
//     const usersComments = [];

//     const urlTitle = 'https://jsonplaceholder.typicode.com/posts'
//     const urlComments = 'https://jsonplaceholder.typicode.com/comments'

//     try{
//         let resultTitle = await fetch(urlTitle);
//         let resultComments = await fetch(urlComments);

//         let dataTitle = await resultTitle.json();
//         let dataComments = await resultComments.json();

//         dataTitle.forEach(post => {
//             if (post.title == title) {
//                 dataComments.forEach( comment => {
//                     if (comment.postId == post.id) {
//                         usersComments.push(comment);
//                     }
//                 })
//                 console.log(usersComments);
//             }
//         })
//     }
//     catch{
//         console.log("We can't find your title in our database, sorry");
//     }
// }
// getComment("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")


/*Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает никнейм пользователя (/users) и 
выводит все его фотографии (/photos). В качестве ответа выведите в консоль массив со всеми фотографиями указанного 
пользователя. */

async function getPhotoByNickName(username) {
    const usersPhoto = [];

    const urlUsers = 'https://jsonplaceholder.typicode.com/users';
    const urlAlbume = 'https://jsonplaceholder.typicode.com/albums';
    const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

    try{
        const resultUsers = await fetch(urlUsers);
        const resultAlbume = await fetch(urlAlbume);
        const resultPhotos = await fetch(urlPhotos);

        const dataUsers = await resultUsers.json();
        const dataAlbum = await resultAlbume.json();
        const dataPhotos = await resultPhotos.json();

        dataUsers.forEach( user => {
            if (user.username == username) {
                dataAlbum.forEach(album => {
                    if (album.userId == user.id) {
                        dataPhotos.forEach( photo => {
                            if (photo.albumId == album.userId) {
                                usersPhoto.push(photo.url);
                            }
                        })
                    }
                })
            }
            console.log(usersPhoto);
        })
    }
    catch{
        console.log("Sorry, but we don't");
    }
}

getPhotoByNickName('Bret')