import axios from "axios";

axios({
    method: "GET",
    url: "https://github.com/scoheart/create-github-api2/tree/main/packages/templates"
}).then(res => console.log(res.date))