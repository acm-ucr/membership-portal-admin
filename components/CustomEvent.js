const CustomEvent = ({ event: { summary, location, start } }) => {
  return (
    <div className="font-lexend p-1">
      <p className="inline whitespace-nowrap">
        {summary}
        <br />
        {location}
        &nbsp; - &nbsp;
        {new Date(start).toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
};

export default CustomEvent;
