import { useState } from 'react'
import { X, Calculator, ArrowRight, Check, Sparkles, Layers, Clock, Cpu } from 'lucide-react'

export default function ProjectEstimatorModal({ isOpen, onClose, onSelectScope }) {
  const [projectType, setProjectType] = useState('fullstack')
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'db', 'responsive'])
  const [timeline, setTimeline] = useState('standard')

  if (!isOpen) return null

  const projectTypes = [
    { id: 'fullstack', label: 'Full-Stack Web App', baseDays: 20, stack: 'React, Node.js / Laravel, MySQL' },
    { id: 'dashboard', label: 'Admin / SaaS Dashboard', baseDays: 16, stack: 'React, Tailwind, Charts, REST API' },
    { id: 'ecommerce', label: 'E-Commerce Platform', baseDays: 22, stack: 'PHP, WooCommerce / React, MySQL' },
    { id: 'landing', label: 'High-Converting Landing Page', baseDays: 7, stack: 'React / HTML5, Tailwind, Animations' },
  ]

  const featureOptions = [
    { id: 'auth', label: 'User Authentication & Roles', days: 4 },
    { id: 'db', label: 'Relational Database (MySQL)', days: 5 },
    { id: 'api', label: 'External REST API Integration', days: 3 },
    { id: 'responsive', label: 'Pixel-Perfect Mobile UI', days: 3 },
    { id: 'theme', label: 'Dark & Light Mode Switcher', days: 2 },
    { id: 'analytics', label: 'Interactive Data Charts', days: 4 },
    { id: 'cms', label: 'Admin Content Management', days: 5 },
  ]

  const toggleFeature = (id) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  // Calculate dynamic timeframe
  const currentBase = projectTypes.find(p => p.id === projectType)?.baseDays || 14
  const featuresTotal = selectedFeatures.reduce((acc, fId) => {
    const f = featureOptions.find(opt => opt.id === fId)
    return acc + (f ? f.days : 0)
  }, 0)

  let totalDays = currentBase + featuresTotal
  if (timeline === 'express') totalDays = Math.max(Math.round(totalDays * 0.7), 5)
  if (timeline === 'flexible') totalDays = Math.round(totalDays * 1.25)

  const weeksEstimate = Math.ceil(totalDays / 5)

  const selectedTypeObj = projectTypes.find(p => p.id === projectType)

  const handleApply = () => {
    const featureLabels = selectedFeatures
      .map(id => featureOptions.find(f => f.id === id)?.label)
      .filter(Boolean)

    const summaryText = `[Project Inquiry via Estimator]
Type: ${selectedTypeObj?.label}
Recommended Architecture: ${selectedTypeObj?.stack}
Target Pace: ${timeline.toUpperCase()} (Est. ${weeksEstimate} weeks / ~${totalDays} working days)
Selected Capabilities:
${featureLabels.map(l => `• ${l}`).join('\n')}

Hi Jamal, I configured this project blueprint and would like to discuss implementation details.`

    if (onSelectScope) {
      onSelectScope({
        subject: `Project Inquiry: ${selectedTypeObj?.label}`,
        message: summaryText
      })
    }
    onClose()

    // Smooth scroll to contact
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-surface border border-line shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Calculator size={18} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-content">Dynamic Project Estimator</h2>
              <p className="text-xs text-muted">Configure requirements to calculate estimated timeline &amp; tech stack</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-line text-muted hover:text-content"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* 1. Project Type Selector */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-mono font-semibold text-primary uppercase tracking-wider">
            Step 1: Select Project Type
          </label>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setProjectType(type.id)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  projectType === type.id
                    ? 'border-primary bg-primary/10 text-content shadow-sm'
                    : 'border-line bg-surfaceHover text-muted hover:text-content'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-content">{type.label}</span>
                  {projectType === type.id && <Check size={14} className="text-primary" />}
                </div>
                <span className="text-[11px] font-mono text-muted block mt-1">Stack: {type.stack}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Key Features Multi-Select */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-mono font-semibold text-primary uppercase tracking-wider">
            Step 2: Required Capabilities &amp; Features
          </label>
          <div className="grid sm:grid-cols-2 gap-2">
            {featureOptions.map((feat) => {
              const isChecked = selectedFeatures.includes(feat.id)
              return (
                <button
                  key={feat.id}
                  type="button"
                  onClick={() => toggleFeature(feat.id)}
                  className={`p-2.5 rounded-lg border text-left text-xs flex items-center justify-between transition-colors ${
                    isChecked
                      ? 'border-primary/60 bg-primary/5 text-content font-semibold'
                      : 'border-line bg-surfaceHover text-muted hover:text-content'
                  }`}
                >
                  <span>{feat.label}</span>
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center ${
                      isChecked ? 'border-primary bg-primary text-white' : 'border-line'
                    }`}
                  >
                    {isChecked && <Check size={12} />}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* 3. Pace / Timeline Preference */}
        <div className="space-y-2 mb-6">
          <label className="block text-xs font-mono font-semibold text-primary uppercase tracking-wider">
            Step 3: Timeline Urgency
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'standard', label: 'Standard Delivery' },
              { id: 'express', label: 'Accelerated Sprint' },
              { id: 'flexible', label: 'Flexible Phased' },
            ].map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTimeline(t.id)}
                className={`py-2 px-3 rounded-lg border text-xs font-medium text-center transition-colors ${
                  timeline === t.id
                    ? 'border-primary bg-primary text-white'
                    : 'border-line bg-surfaceHover text-muted hover:text-content'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Calculation Box */}
        <div className="p-4 rounded-xl bg-surfaceHover border border-line space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted uppercase font-mono tracking-wider flex items-center gap-1.5">
              <Clock size={14} className="text-primary" />
              Estimated Turnaround
            </span>
            <span className="text-sm font-extrabold text-primary font-mono">
              ~{weeksEstimate} {weeksEstimate === 1 ? 'Week' : 'Weeks'} ({totalDays} work days)
            </span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-line/60">
            <span className="text-xs text-muted uppercase font-mono tracking-wider flex items-center gap-1.5">
              <Cpu size={14} className="text-primary" />
              Recommended Architecture
            </span>
            <span className="text-xs font-bold text-content font-mono">
              {selectedTypeObj?.stack}
            </span>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleApply}
            className="flex-1 btn-primary py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
          >
            <span>Transfer Blueprint to Contact Form</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-3 rounded-xl border border-line text-xs font-semibold text-muted hover:text-content"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  )
}
