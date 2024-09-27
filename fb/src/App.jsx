import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GroupProvider } from './context/GroupContext'; 
import GroupCreatePage from './components/GroupCreate/GroupCreatePage';
import GroupEditForm from './components/GroupEdit/GroupEditForm';
import GroupListPage from './components/GroupList/GroupListPage';

const App = () => {
  return (
    <GroupProvider> {/* GroupProvider로 전체 애플리케이션을 감쌉니다. */}
      <h1>그룹 관리 시스템</h1>
      <Routes>
        <Route path="/" element={<GroupListPage />} />
        <Route path="/groups/create" element={<GroupCreatePage />} />
        <Route path="/groups/:groupId/edit" element={<GroupEditForm />} />
      </Routes>
    </GroupProvider>
  );
};

export default App;
