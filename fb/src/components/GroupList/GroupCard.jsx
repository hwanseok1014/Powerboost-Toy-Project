import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './GroupListPage.module.css'; 

const GroupCard = ({ group }) => { 
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(`/groups/${group.id}/edit`); 
  };

  return (
    <div className="group-card" onClick={handleCardClick} style={{ cursor: 'pointer', border: '1px solid #ddd', padding: '10px', margin: '10px' }}> {/* 클릭하면 수정 페이지로 이동하는 카드 컴포넌트 */}
      <img src={group.imageUrl} alt={group.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} /> {/* 그룹의 대표 이미지를 표시합니다. */}
      <h3>{group.name}</h3> {/* 그룹의 이름을 표시합니다. */}
      <p>{group.introduction}</p> {/* 그룹의 소개를 표시합니다. */}
    </div>
  );
};

export default GroupCard; // GroupCard 컴포넌트를 기본으로 내보냅니다.
