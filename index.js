var name_sort = () => {
    const nameList = document.getElementById("nameTextarea").value.replace(/ +/g, " ").split(' ');
    document.getElementById("nameTextarea").value = nameList.sort().join(' ');
}