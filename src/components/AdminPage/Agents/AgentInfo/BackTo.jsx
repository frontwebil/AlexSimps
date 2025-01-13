import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export function BackTo() {
  const navigate = useNavigate();
  return (
    <div className="BackTo">
      <div className="BackTo-button" onClick={() => navigate(-1)}>
        <MdOutlineArrowBack />
        <p>Back</p>
      </div>
    </div>
  );
}
