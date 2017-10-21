export default {
  grid: {cells: [
    {id: `${0}${0}`, x: 0, y: 0, count: 0, value: "*"},
    {id: `${0}${1}`, x: 0, y: 1, count: 0, value: "*"},
    {id: `${0}${2}`, x: 0, y: 2, count: 0, value: "."},
  ]},
  assignValue: sinon.spy(),
  convertValue: sinon.spy(),
  x: 0,
  y: 1,
  value: ".",
}
