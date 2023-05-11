const Proo = ({
name,
bio,
img,
profession,
handelAlert,

}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} />
      <p>{profession} </p>
      <br/>
      
      <p>{bio}</p>
      <button onClick={handelAlert}>click me !</button>

     


     
      
     
    </div>
  );
};
Proo.defaultProps = {
  name: "hedha ena"
};
export default Proo;
