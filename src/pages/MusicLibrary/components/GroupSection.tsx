import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TrackCard from './TrackCard';
import { Track } from '@/utils/mockdata';

// Define the types for props
interface GroupSectionProps {
  group: string;
  tracks: Track[];
}

export const GroupSection: React.FC<GroupSectionProps> = ({ group, tracks }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-2xl font-semibold mb-2 flex justify-between items-center">
      <span>{group}</span>
      <span className="text-sm bg-gray-200 text-gray-600 rounded-full px-3 py-1">
        {tracks.length} tracks
      </span>
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <AnimatePresence>
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </AnimatePresence>
    </div>
  </div>
);

export default GroupSection;
