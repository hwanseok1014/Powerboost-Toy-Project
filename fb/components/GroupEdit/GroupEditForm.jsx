import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { useGroups } from '../../context/GroupContext'; 
import Button from '../Button/Button'; 
import './GroupEditForm.module.css'; 

const GroupEditForm = () => {
  const { groupId } = useParams(); 
  const { groups, updateGroup } = useGroups(); 
  const [formData, setFormData] = useState({ 
    name: '',
    password: '',
    imageUrl: '',
    isPublic: true,
    introduction: '',
  });
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 

  // 그룹 ID로 그룹을 찾고 폼 데이터를 초기화하는 함수
  useEffect(() => {
    const groupToEdit = groups.find(group => group.id === parseInt(groupId, 10)); 
    if (groupToEdit) {
      setFormData(groupToEdit); 
    } else {
      setError('그룹을 찾을 수 없습니다.'); 
    }
  }, [groupId, groups]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const updatedGroup = {
      ...formData, // 폼의 데이터를 사용
    };

    updateGroup(updatedGroup); 
    alert('그룹 수정이 완료되었습니다!'); 
    navigate('/'); 
  };

  return (
    <div className="group-edit-form">
      <h2>그룹 정보 수정</h2>
      <form onSubmit={handleSubmit}>
        <label>
          그룹명:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          대표 이미지:
          <input type="file" name="imageUrl" onChange={(e) => setFormData({ ...formData, imageUrl: e.target.files[0]?.name })} />
        </label>
        <label>
          그룹 소개:
          <textarea name="introduction" value={formData.introduction} onChange={handleChange} required />
        </label>
        <label>
          그룹 공개 설정:
          <input type="checkbox" name="isPublic" checked={formData.isPublic} onChange={handleChange} />
        </label>
        <label>
          비밀번호 입력:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        {error && <p className="error-message">{error}</p>}
        <Button type="submit">수정하기</Button>
      </form>
    </div>
  );
};

export default GroupEditForm;
