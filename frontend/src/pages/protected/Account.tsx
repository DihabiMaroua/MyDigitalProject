import { useNavigate } from 'react-router-dom';
import Button from '../../components/forms/buttons/Button';
import { useAuth } from '../../contexts/authContext';

function Account() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/authentification');
  };

  return (
    <>
      <h2>Dashboard</h2>
      <Button onClick={handleLogout}>
        Se déconnecter
      </Button>
    </>
  );
}

export default Account;
