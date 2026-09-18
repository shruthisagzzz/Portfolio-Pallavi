import { useMemo, useState } from 'react'
import { Background, Controls, Handle, MarkerType, MiniMap, Position, ReactFlow, useEdgesState, useNodesState, type Edge, type Node, type NodeProps } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import type { SkillNodeData } from '../types/portfolio'

type SkillNode = Node<SkillNodeData, 'skill'>

const nodesSeed: SkillNode[] = [
  { id: 'pallavi', type: 'skill', position: { x: 410, y: 210 }, data: { label: 'Pallavi', detail: 'AI/ML + Software', kind: 'core' } },
  { id: 'ai', type: 'skill', position: { x: 120, y: 60 }, data: { label: 'AI & ML', detail: 'Intelligent systems', kind: 'ai' } },
  { id: 'web', type: 'skill', position: { x: 700, y: 60 }, data: { label: 'Web', detail: 'Product interfaces', kind: 'web' } },
  { id: 'data', type: 'skill', position: { x: 110, y: 390 }, data: { label: 'Data', detail: 'Analysis + storage', kind: 'data' } },
  { id: 'systems', type: 'skill', position: { x: 700, y: 390 }, data: { label: 'Core CS', detail: 'Engineering foundations', kind: 'systems' } },
  { id: 'python', type: 'skill', position: { x: 0, y: 190 }, data: { label: 'Python', detail: 'Primary AI language', kind: 'ai' } },
  { id: 'ml', type: 'skill', position: { x: 210, y: 190 }, data: { label: 'Machine Learning', detail: 'Models + evaluation', kind: 'ai' } },
  { id: 'cv', type: 'skill', position: { x: 250, y: 0 }, data: { label: 'Computer Vision', detail: 'OpenCV + MediaPipe', kind: 'ai' } },
  { id: 'react', type: 'skill', position: { x: 860, y: 190 }, data: { label: 'React', detail: 'Typed UI systems', kind: 'web' } },
  { id: 'javascript', type: 'skill', position: { x: 650, y: 200 }, data: { label: 'JavaScript', detail: 'Browser applications', kind: 'web' } },
  { id: 'sql', type: 'skill', position: { x: 0, y: 520 }, data: { label: 'SQL', detail: 'Relational queries', kind: 'data' } },
  { id: 'databases', type: 'skill', position: { x: 255, y: 520 }, data: { label: 'Databases', detail: 'MySQL · PostgreSQL · MongoDB', kind: 'data' } },
  { id: 'dsa', type: 'skill', position: { x: 650, y: 520 }, data: { label: 'DSA', detail: 'Problem solving', kind: 'systems' } },
  { id: 'architecture', type: 'skill', position: { x: 860, y: 520 }, data: { label: 'OOP + DBMS', detail: 'Maintainable systems', kind: 'systems' } },
]

const edgePairs: [string, string][] = [
  ['pallavi','ai'],['pallavi','web'],['pallavi','data'],['pallavi','systems'],['ai','python'],['ai','ml'],['ai','cv'],['web','react'],['web','javascript'],['data','sql'],['data','databases'],['systems','dsa'],['systems','architecture'],['python','cv'],['sql','databases'],['javascript','react'],
]

const edgesSeed: Edge[] = edgePairs.map(([source, target], index) => ({ id: `e-${index}`, source, target, animated: source === 'pallavi', markerEnd: { type: MarkerType.ArrowClosed, width: 12, height: 12 }, style: { strokeWidth: 1.4 } }))

function SkillNodeView({ data, selected }: NodeProps<SkillNode>) {
  return <div className={`skill-node skill-node-${data.kind} ${selected ? 'is-selected' : ''}`}><Handle type="target" position={Position.Left} /><strong>{data.label}</strong><span>{data.detail}</span><Handle type="source" position={Position.Right} /></div>
}

const nodeTypes = { skill: SkillNodeView }

export function SkillNetwork() {
  const [nodes, , onNodesChange] = useNodesState<SkillNode>(nodesSeed)
  const [edges, , onEdgesChange] = useEdgesState(edgesSeed)
  const [selectedId, setSelectedId] = useState('pallavi')
  const selected = useMemo(() => nodes.find((node) => node.id === selectedId)?.data ?? nodesSeed[0].data, [nodes, selectedId])

  return (
    <div className="network-shell">
      <div className="network-toolbar"><span><i /> Live graph</span><p>Drag nodes · pan canvas · use controls to zoom</p></div>
      <div className="network-canvas">
        <ReactFlow<SkillNode, Edge> nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onNodeClick={(_, node) => setSelectedId(node.id)} fitView minZoom={0.45} maxZoom={1.6} nodesConnectable={false} proOptions={{ hideAttribution: true }}>
          <Background gap={24} size={1} /><MiniMap pannable zoomable nodeColor={(node) => node.data?.kind === 'core' ? '#c9ff4a' : '#7791ff'} /><Controls showInteractive={false} />
        </ReactFlow>
      </div>
      <div className="network-inspector"><span>Selected capability</span><strong>{selected.label}</strong><p>{selected.detail}</p></div>
    </div>
  )
}
