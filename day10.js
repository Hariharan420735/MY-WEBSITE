function updateBio() {
    let Name = document.getElementById('name').value
    let img = document.getElementById('src').value
    let bio = document.getElementById('bio').value
    document.getElementById('h1').innerHTML = Name
    document.getElementById('source').src = img
    document.getElementById('h2').innerHTML = bio
}