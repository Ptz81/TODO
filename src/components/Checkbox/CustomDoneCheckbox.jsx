import PropTypes from "prop-types";

export const CustomDoneCheckbox = ({ checked, onChange }) => {
    const handleCheckboxChange = () => {
        onChange(!checked);
    };
    const checkboxStyle = {
    marginLeft: "20px",
  };
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={checkboxStyle}
            onClick={handleCheckboxChange}
        >
            {checked ? (
        
                <path
                    d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm6.293 6.293l-7 7-1.414 1.414-1.414-1.414-4-4 1.414-1.414 3.293 3.293 6-6 1.414 1.414z"
                    fill="green"
                />
            ) : (
      
                <path
                    d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm1-13h-2v6h2z"
                    stroke="#0d6efd"
                    strokeWidth="1"
                    fill="none"
                />
            )}
        </svg>
    )
}
    
    CustomDoneCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};