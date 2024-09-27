
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGroups } from '../../context/GroupContext'; 
import Button from '../Button/Button'; 
import './GroupCreatePage.module.css';

const GroupCreatePage = () => {
  const [formData, setFormData] = useState({
    name: '', // 그룹명 초기값
    password: '', // 비밀번호 초기값
    imageUrl: '', // 이미지 URL 초기값
    isPublic: true, // 그룹 공개 여부 초기값
    introduction: '', // 그룹 소개 초기값
  });
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 
  const { addGroup } = useGroups(); 

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

    const newGroup = {
      id: Date.now(), 
      ...formData, 
    };

    addGroup(newGroup); 
    alert('그룹이 생성되었습니다!'); 
    navigate('/'); 
  };

  return (
    <div className="group-create-page">
      <h2>그룹 만들기</h2>
      <form onSubmit={handleSubmit} className="create-form">
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
          그룹 공개 선택:
          <input type="checkbox" name="isPublic" checked={formData.isPublic} onChange={handleChange} />
        </label>
        <label>
          비밀번호 생성:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        {error && <p className="error-message">{error}</p>}
        <Button type="submit">만들기</Button>
      </form>
    </div>
  );
};

export default GroupCreatePage;
