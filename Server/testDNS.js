const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dns.resolveSrv(
    "_mongodb._tcp.sustainx.vaazzyi.mongodb.net",
    (err, records) => {
        if (err) {
            console.log("DNS Error:", err);
        } else {
            console.log("DNS Records Found:", records);
        }
    }
);
