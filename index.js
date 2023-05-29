import _ from 'lodash';

export default function solution(content){
  // BEGIN
  console.log(content);
  const dataArr = {};
  //получаю данные без заголовка и конечных пробелов
  const data = content.trim().split('\n').slice(1);
  //вывожу колличество пассажирова
  const numOfPassenger = data.length;
  dataArr.numbersOfPassenger = numOfPassenger;
  //получаю список уникальных именований портов
  const sortEmnarker = Array.from( new Set (data.map((item) => item.split(',')[12])))
  .map((el) => el
  .trim()
  .split('\\'))
  .slice(0, 3)
  .join(',');
  dataArr.namesOfEmnarkers = sortEmnarker;
  //вывожу соотношение мужчин и женщин
  const male = data.map((item) => item.split(',')[5]).filter((item) => item === 'male').length;
  const women = data.map((item) => item.split(',')[5]).filter((item) => item === 'female').length;
   dataArr.sexRatio = {
  male: `${((male / numOfPassenger) * 100).toFixed(2)}%`,
  female: `${((women / numOfPassenger) * 100).toFixed(2)}%`,
 }
//процент выживщих пассажиров
//нахожу колличество выживших
 const passSurvived = data.map((item) => item.split(',')[1]).filter((item) => item === '1').length;

 dataArr.survived = `${((passSurvived / numOfPassenger) * 100).toFixed(2)}%`;


 //имена всех пассажиров, начинающиеся на А 
 const sortedNamesA = data.map((item) => item.replace( '"' , ' ').split(',')[3])
 .filter((item) => item
 .includes("A"))
 .sort()
 .join(', ');

 dataArr.namesStartingWithA = sortedNamesA;
  //пытаюсь преобразовать объект в строку, но она такая страшная, как мой бывший
 const str = JSON.stringify(dataArr).split(',"').join('\n');

  console.log(dataArr)
  // END
}
