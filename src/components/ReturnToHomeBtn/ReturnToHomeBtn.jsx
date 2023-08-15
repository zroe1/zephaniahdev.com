import './ReturnToHomeBtn.css';

const ReturnToHomeBtn = (props) => {
  const goHome = () => {
    props.handleGoHome();
  }

  return (
      <button className="returnHome" onClick={goHome}>Return to Home</button>
  )
}

export default ReturnToHomeBtn;