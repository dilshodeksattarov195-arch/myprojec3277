const notifyCaveConfig = { serverId: 5732, active: true };

const notifyCaveHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5732() {
    return notifyCaveConfig.active ? "OK" : "ERR";
}

console.log("Module notifyCave loaded successfully.");