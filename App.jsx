import React, { useState } from 'react';
import { Plus, Building2 } from 'lucide-react';
import StatsCards from './components/StatsCards';
import InventoryPanel from './components/InventoryPanel';
import LeadTable from './components/LeadTable';
import AddLeadModal from './components/AddLeadModal';
import { initialLeads, unitInventory, leadStatuses, leadSources } from './data/sampleData';

function App() {
  const [leads, setLeads] = useState(initialLeads);
  const [filterProject, setFilterProject] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  const handleStatusChange = (id, newStatus) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
  };

  const handleAddLead = (newLead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  const filteredLeads =
    filterProject === 'All' ? leads : leads.filter((l) => l.project === filterProject);

  return (
    <div className="app" style={{ padding: '24px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Building2 size={28} color="#2563eb" />
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700 }}>Akshay Construction & Realty</h1>
            <p style={{ fontSize: 13, color: '#64748b' }}>Lead Management Dashboard — Star City Phase 1 & 2</p>
          </div>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '10px 18px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <Plus size={16} /> Add Lead
        </button>
      </div>

      <StatsCards leads={leads} />
      <InventoryPanel inventory={unitInventory} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600 }}>Lead Pipeline</h2>
        <select
          value={filterProject}
          onChange={(e) => setFilterProject(e.target.value)}
          style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #cbd5e1' }}
        >
          <option>All</option>
          <option>Star City Phase 1</option>
          <option>Star City Phase 2</option>
        </select>
      </div>

      <LeadTable leads={filteredLeads} statuses={leadStatuses} onStatusChange={handleStatusChange} />

      {showAddModal && (
        <AddLeadModal
          onAdd={handleAddLead}
          onClose={() => setShowAddModal(false)}
          sources={leadSources}
        />
      )}
    </div>
  );
}

export default App;
