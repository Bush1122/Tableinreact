import Topic from "./Topic";

function Table() {
  const [tesla, honda] = Topic;

  const {
    SpeedState: { topSpeed: hondaTospeedup }
  } = honda;

  const {
    SpeedState: { topSpeed: teslaTospeedup }
  } = tesla;

  const {
    colourBypourity: [hondatopColor]
  } = honda;

  const {
    colourBypourity: [teslatopColor]
  } = tesla;

  return (
    <div>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>TopColor</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTospeedup}</td>
          <td>{tesla.topColor}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTospeedup}</td>
          <td>{honda.topColor}</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
