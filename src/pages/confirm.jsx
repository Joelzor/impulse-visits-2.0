const confirm = () => {
  return (
    <div className="overlay">
      <div className="modal">
        <h3>Plan successfully added!</h3>
        <div className="flex gap-10">
          <button className="btn confirm-btn">Back</button>
          <button className="btn plans-btn">See my plans</button>
        </div>
      </div>
    </div>
  );
};

export default confirm;
