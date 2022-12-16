// var game = [{
//     id: 1,
//     Name: "Sonic the HedgeHog",
//     Platform: 'Switch',
//     Leaderboard:[{
//       id:1,
//       Player: "NATE",
//       Score: 10000,
//       Time: null
//     },{
//         id:2,
//         Player: "Muhammad",
//         Score: 10002,
//         Time: null
//       }]
//   },
//   {
//     id: 2,
//     Name: "Hollow Knight",
//     Platform: 'PC',
//     Leaderboard:[{
//       id:1,
//       Player: "Jayson",
//       Score: null,
//       Time: "20:21:56:02"
//     },{
//         id:2,
//         Player: "Dean",
//         Score: null,
//         Time: "19:22:40:20"
//       }]
//   }];

console.log("LOCKED AND LOADED!!!");
var tableCode = 
"<table>\
<tr>\
<th> Games</th> <th>Platforms</th>\
</tr>";
window.onload = function(event) {
        fetch ("https://lime-faithful-hippo.cyclic.app/api/games")
        .then((response)=> response.json())
        .then ((data)=> {

            console.log(data);
            data.forEach(function(currentGame){
              tableCode += `<tr><td> <a href="Leaderboard.html?id=${currentGame.id}">${currentGame.GameName}</a> </td> <td> ${currentGame.Platform} </td></tr>`;
              
              })
              
                      tableCode += "</table>";
                      document.getElementById("gameTable").innerHTML = tableCode;
        });



     

//
};