///   Bài 1:
const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
    { name: "Hà Văn Phòng", age: 30, gender: "nam" },
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
]
function coutPersonByGender(listPersons, gender) {
    let count = 0;
    for (var i = 0; i < listPersons.length; i++)
        if (listPersons[i].gender == gender)
            count++;
    return count;
}
function statisticsByAge(listPersons) {
    let TT = {
        treCon: 0,
        thanhNien: 0,
        nguoiGia: 0,
    };
    for (var i = 0; i < listPersons.length; i++)
        if (listPersons[i].age < 18)
            TT.treCon += 1;
        else if (listPersons[i].age >= 18 && listPersons[i].age <= 30)
            TT.thanhNien += 1;
        else if (listPersons[i].age > 30)
            TT.nguoiGia += 1;
    console.log(TT);
}
function run() {
    console.log("Số lượng thành viên nam là: ", coutPersonByGender(listPersons, "nam"));
    console.log("Số lượng thành viên nữ là: ", coutPersonByGender(listPersons, "nữ"));
    statisticsByAge(listPersons);
}



//Bài 2
const listAccounts = [
    { id: 1, username: 'aduvip', balance: 1000000, type: 'normal' },
    { id: 2, username: 'aduvip1', balance: 500000, type: 'normal' },
    { id: 3, username: 'aduvip2', balance: 0, type: 'normal' },
    { id: 4, username: 'aduvip3', balance: 20000, type: 'normal', isActive: false },
    { id: 5, username: 'aduvip4', balance: 2500000, type: 'normal' },
    { id: 6, username: 'aduvip5', balance: 0, type: 'normal', isActive: false },
    { id: 7, username: 'aduvip6', balance: 1300000, type: 'normal' },
    { id: 8, username: 'aduvip7', balance: 2200000, type: 'normal' },
    { id: 9, username: 'aduvip8', balance: 1450000, type: 'normal', isActive: false },
    { id: 10, username: 'aduvip9', balance: 0, type: 'normal' },
    { id: 11, username: 'aduvip10', balance: 780000, type: 'normal', isActive: false },
    { id: 12, username: 'aduvip11', balance: 560000, type: 'normal' },
    { id: 13, username: 'aduvip12', balance: 0, type: 'normal', isActive: false },
    { id: 14, username: 'aduvip13', balance: 430000, type: 'normal' },
    { id: 15, username: 'aduvip14', balance: 990000, type: 'normal', isActive: false },
    { id: 16, username: 'aduvip15', balance: 10000, type: 'normal' },
]
function Vip(listAccounts) {
    let adu = 0;
    for (var i = 0; i < listAccounts.length; i++)
        if (listAccounts[i].balance > 1000000) {
            listAccounts[i].type = "VIP - HIT";
            console.log(listAccounts[i])
        }
}

function user(listAccounts, balance) {
    for (var i = 0; i < listAccounts.length; i++) {
        if (listAccounts[i].balance == 0)
            listAccounts[i].balance += balance * 3;
        else
            listAccounts[i].balance += balance;
    }
    for (var i = 0; i < listAccounts.length; i++)
        console.log(listAccounts[i]);
}
function setTrue(listAccounts) {
    for (var i = 0; i < listAccounts.length; i++)
        if (listAccounts[i].isActive != null)
            listAccounts[i].isActive = true;
    console.log(listAccounts);
}
function run() {
    Vip(listAccounts);
    user(listAccounts, 5000000);
    setTrue(listAccounts);
}
