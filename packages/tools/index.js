import axios from "axios";

axios({
    method: "GET",
    url: "https://api.github.com/repos/scoheart/create-github-api2/contents/packages/templates/react"
}).then(res => console.log(res.data))