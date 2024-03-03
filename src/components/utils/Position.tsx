interface Props {
  position: Array<string>;
}

const Position = ({ position }: Props) => {
  return (
    <div className="pt-10">
      {position.map((name, idx) => (
        <span key={name}>
          <span>{name}</span>
          {position.length - 1 !== idx && <span className="ml-3 mr-3">{'>'}</span>}
        </span>
      ))}
    </div>
  );
};

export default Position;
