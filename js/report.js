var jpdbBaseUrl = "http://api.login2explore.com:5577"
var jpdbIML = "/api/iml"
var jpdbIRL = "/api/irl"
var conToken = "90932051|-31949224430331909|90962718"
var DB = "invDB"
var Rel = "itemRel"

$('#reportForm').submit(function(e) {
    e.preventDefault();

    let fromItemID = $('#fromItemID').val();
    let toItemID = $('#toItemID').val();

    let request = {
        token: '90932051|-31949224430331909|90962718',
        select: { "cols": "*" },
        from: "invDB|itemRel",
        createTime: true,
        updateTime: true,
        where: [
            [
                ["invDB|itemRel.itemID", "between", [fromItemID, toItemID]]
            ]
        ]
    };

    let getreq = JSON.stringify(request);

    $.ajaxSetup({async:false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getreq,jpdbBaseUrl,jpdbIRL)
    $.ajaxSetup({async:true});

    if(resJsonObj.status !=200){
        alert('Enter Valid ID range')
        return;
    }
    
    let tbody = $('#reportTable tbody');
    tbody.empty();

    let records = resJsonObj.data[1].Records;
    console.log(records);
    records.forEach(record => {
        var currstock = record[4] - record[3]
        let row = `<tr>
                        <td>${record[1]}</td> 
                        <td>${record[2]}</td> 
                        <td>${currstock}</td> 
                        <td>${record[5]}</td> 
                        <td>${record[6]}</td> 
                   </tr>`;
        
        tbody.append(row);
    });
});
