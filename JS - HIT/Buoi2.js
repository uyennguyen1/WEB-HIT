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
  const comments = [
    {
        body: "5 điều Bác Hồ dạy",
        child: [
            {
                body: "1. Yêu tổ quốc, yêu đồng bào",
                child: []
            },
            {
                body: "2. Học tập tốt, lao động tốt",
                child: []
            },
            {
                body: "3. Đoàn kết tốt, kỷ luật tốt",
                child: []
            },
            {
                body: "4. Giữ gìn vệ sinh thật tốt",
                child: []
            },
            {
                body: "5. Khiêm tốt, thật thà, dũng cảm",
                child: []
            }
        ]
    },
    {
        body: "Ơ mây dình, gút chóp em",
        child: [
            {
                body: "Level 2",
                child: [
                    {
                        body: "Level 3",
                        child: [
                            {
                                body: "Level 4",
                                child: []
                            },
                        ]
                    },
                    {
                        body: "Level 3.1",
                        child: []
                    }
                ]
            }
        ]
    },
    {
        body: "Anh rất chào em",
        child: []
    }
]

//Bài 0: 
const listBalance = listAccounts.filter(listAccounts => listAccounts.balance > 500000);
console.log("Danh sách những tài khoản thuộc hạng rich kid :< ");
for (let value of listBalance)
    console.log(value);
//Hi1
for(let person of listAccounts)
   delete person.id;
var newListAccounts = listAccounts.map(x =>{
   if(x.isActive = 'isActive' in x)
       x.isActive = true;
   else if (x.isActive != 'isActive' in x)
       x.isActive = null;
   return x;
})
console.log("--------------Danh sách các username mới không chứa ID Đã Convert-------------- ")
console.log(newListAccounts)
//Hi2
const newSum = listAccounts.reduce(function(sum, value)
{
    return sum + value.balance;
},0)
console.log("Tổng balance: ")
console.log(newSum)
//Hi3
var countedAge = listPersons.reduce(function (allAge, name) { 
    if (name.age < 18)
        allAge.trecon++
    else if(name.age>=18 && name.age <=35)
        allAge.thanhnien++
    else 
        allAge.nguoigia++
    return allAge;
  }, {trecon:0, thanhnien:0, nguoigia:0});
console.log("Danh sách các lứa tuổi: ")    
console.log(countedAge)
//Bài 1:
let a = [1, 2, 3, 4, 3, 1, 2, 5, 6, 7, 5, 6, 8, 7]
let countArray = a.reduce(function(valueArray,value){
    if(value in valueArray)
        valueArray[value]++
    else
        valueArray[value] = 1
    return valueArray
},{})
console.log(countArray)

//Bài 2:
var list = comments.reduce(function(listValue,value){
    return listValue.concat(value);
},[])
console.log(list)



