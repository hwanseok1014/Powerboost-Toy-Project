import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { useGroups } from '../../context/GroupContext'; 
import Button from '../Button/Button'; 

const GroupDeleteForm = () => {
  const { groupId } = useParams(); 
  const { deleteGroup } = useGroups(); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 

  // 비밀번호 입력값 변경 핸들러
  const handleChange = (e) => {
    setPassword(e.target.value); 
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setError('');
    
    const result = deleteGroup(parseInt(groupId, 10), password);
    
    if (result.success) {
      alert(result.message); 
      navigate('/');
    } else {
      setError(result.message);
  };

  return (
    <div className="group-delete-form">
      <h2>그룹 삭제</h2>
      <form onSubmit={handleDelete}>
        <label>
          비밀번호 입력:
          <input type="password" value={password} onChange={handleChange} required />
        </label>
        {error && <p className="error-message">{error}</p>} {/* 에러 메시지를 표시 */}
        <Button type="submit">삭제하기</Button> {/* 폼 제출 버튼 */}
      </form>
    </div>
  );
};

export default GroupDeleteForm;

