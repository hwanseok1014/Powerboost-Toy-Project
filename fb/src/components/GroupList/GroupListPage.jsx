import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useGroups } from '../../context/GroupContext'; 
import GroupCard from './GroupCard'; 
import './GroupListPage.module.css'; 

const GroupListPage = () => {
  const { groups } = useGroups(); 
  const navigate = useNavigate(); 
// src/components/GroupList/GroupListPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useGroups } from '../../context/GroupContext'; 
import GroupCard from './GroupCard'; 
import './GroupListPage.module.css'; 

const GroupListPage = () => {
  const { groups } = useGroups(); 
  const navigate = useNavigate(); 

  // 그룹 만들기 페이지로 이동하는 함수
  const handleCreateGroup = () => {
    navigate('/groups/create');
  };

  return (
    <div className="group-list-page">
      <h2>그룹 목록</h2>
      {groups.length === 0 ? (
        // 그룹이 없을 때 보여주는 화면
        <div className="no-groups">
          <p>등록된 공개 그룹이 없습니다.</p>
          <button className="create-group-button" onClick={handleCreateGroup}>
            그룹 만들기
          </button>
        </div>
      ) : (
        // 그룹이 있을 때 그룹 목록을 렌더링
        <div className="group-cards-container">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} /> 
          ))}
        </div>
      )}
    </div>
  );
};

export default GroupListPage;

  const handleCreateGroup = () => {
    navigate('/groups/create');
  };

  return (
    <div className="group-list-page">
      <h2>그룹 목록</h2>
      {groups.length === 0 ? (
        <div className="no-groups">
          <p>등록된 공개 그룹이 없습니다.</p>
          <button className="create-group-button" onClick={handleCreateGroup}>
            그룹 만들기
          </button>
        </div>
      ) : (
        <div className="group-cards-container">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} /> 
          ))}
          <button className="create-group-button" onClick={handleCreateGroup}>
            그룹 만들기
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupListPage;
