var Excel = require("exceljs");

let calcTable = [
  {
    dv: 1,
    winnerSide: {
      stronger: 10,
      weaker: 10
    },
    loserSide: {
      stronger: 5,
      weaker: 5
    }
  },
  {
    dv: 26,
    winnerSide: {
      stronger: 9,
      weaker: 11
    },
    loserSide: {
      stronger: 5.5,
      weaker: 4.5
    }
  },
  {
    dv: 51,
    winnerSide: {
      stronger: 8,
      weaker: 12
    },
    loserSide: {
      stronger: 6,
      weaker: 4
    }
  },
  {
    dv: 101,
    winnerSide: {
      stronger: 7,
      weaker: 14
    },
    loserSide: {
      stronger: 7,
      weaker: 3.5
    }
  },
  {
    dv: 151,
    winnerSide: {
      stronger: 6,
      weaker: 16
    },
    loserSide: {
      stronger: 8,
      weaker: 3
    }
  }
];

let srcData = [];
let contestData = [];

async function main() {
  try {
    let workbook = new Excel.Workbook();
    await workbook.xlsx.readFile("./origin.xlsx");

    let srcSheet = workbook.getWorksheet("Sheet1");
    let contestSheet = workbook.getWorksheet("Sheet2");

    srcData = getSrcData(srcSheet);
    contestData = getContestData(contestSheet);

    // console.log(srcData);
    // console.log(contestData);

    contestData.forEach(contest => {
      calcScore(contest, srcData, calcTable);
    });

    sumScore(srcData);
    console.log(srcData);
  } catch (error) {
    console.error(error);
  }
}

function getSrcData(srcSheet) {
  let srcData = [];
  for (let index = 2; index < 50; index++) {
    let element = {
      name: srcSheet.getCell(`A${index}`).value,
      grade: srcSheet.getCell(`B${index}`).value,
      contest: []
    };

    srcData.push(element);
  }
  return srcData;
}

function getContestData(srcSheet) {
  let srcData = [];
  for (let index = 2; index < 18; index++) {
    let element = {
      winner: srcSheet.getCell(`A${index}`).value,
      loser: srcSheet.getCell(`B${index}`).value
    };

    srcData.push(element);
  }
  return srcData;
}

function calcScore(contest, gradeList, calcTable) {
  let winnerIndex = gradeList.findIndex(ele => {
    return ele.name === contest.winner;
  });
  let loserIndex = gradeList.findIndex(ele => {
    return ele.name === contest.loser;
  });
  // console.log(gradeList[winnerIndex]);
  // console.log(gradeList[loserIndex]);

  let dv = gradeList[winnerIndex].grade - gradeList[loserIndex].grade;

  let absDv = Math.abs(dv);
  let dvTable = calcTable.findIndex(ele => {
    return ele.dv > absDv;
  });

  let winnerGot = 0;
  let loserGot = 0;

  if (dv >= 0) {
    winnerGot = calcTable[dvTable].winnerSide.stronger;
    loserGot = calcTable[dvTable].loserSide.weaker;
  } else {
    winnerGot = calcTable[dvTable].winnerSide.weaker;
    loserGot = calcTable[dvTable].loserSide.stronger;
  }

  gradeList[winnerIndex].contest.push({ result: "win", dv, got: winnerGot });
  gradeList[loserIndex].contest.push({ result: "lost", dv, got: loserGot });
}

function sumScore(srcData) {
  srcData.forEach(ele => {
    let sum = 0;
    ele.contest.forEach(ele => {
      sum += ele.got;
    });
    ele.sumScore = sum + ele.grade;
  });
}

main();
