/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Github, 
  Archive, 
  UploadCloud, 
  CheckCircle2, 
  Code2, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  ExternalLink, 
  Layers, 
  ShieldCheck,
  Copy,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const repoUrl = "https://github.com/rajatrathaur2000-oss/Test";

  const gitCommands = `git init
git add .
git commit -m "Initial commit - Website code"
git branch -M main
git remote add origin ${repoUrl}.git
git push -u origin main`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gitCommands);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Navigation Header */}
        <header className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-6 mb-12 gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">Website Project Studio</h1>
              <p className="text-xs text-slate-400">Ready for Deployment & GitHub Export</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <a 
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Target Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </header>

        {/* Main Banner / Status Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-slate-800/90 to-slate-800/50 backdrop-blur border border-slate-700/80 rounded-2xl p-6 sm:p-8 mb-10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>GitHub Remote Configured</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Website Ready for GitHub Push
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Aapki website files AI Studio environment mein build ho chuki hain. Niche diye gaye options se aap direct GitHub repo (<code className="text-indigo-300 font-mono text-xs bg-slate-900/60 px-1.5 py-0.5 rounded border border-slate-700">{repoUrl}</code>) par push kar sakte hain.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a 
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/30"
              >
                <Github className="w-4 h-4" />
                <span>Open Repository</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Feature & Instruction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Method 1: AI Studio Export UI */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Method 1: Direct AI Studio Export</h3>
                  <p className="text-xs text-slate-400">Automatic 1-Click Sync</p>
                </div>
              </div>

              <ol className="space-y-3 text-sm text-slate-300 mb-6">
                <li className="flex items-start space-x-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-700 text-slate-300 text-xs font-bold shrink-0 mt-0.5">1</span>
                  <span>Screen ke <strong>Top-Right Header / Settings Menu</strong> par click kariye.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-700 text-slate-300 text-xs font-bold shrink-0 mt-0.5">2</span>
                  <span><strong>Export to GitHub</strong> option select kariye.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-700 text-slate-300 text-xs font-bold shrink-0 mt-0.5">3</span>
                  <span>Repository <code>rajatrathaur2000-oss/Test</code> select karke push authorize kariye.</span>
                </li>
              </ol>
            </div>

            <div className="p-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-xs text-slate-400 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Recommended: Simplest method without terminal authentication.</span>
            </div>
          </motion.div>

          {/* Method 2: Git Terminal Push */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Method 2: Git CLI Commands</h3>
                    <p className="text-xs text-slate-400">Manual Push via Terminal</p>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="p-2 bg-slate-700/60 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors"
                  title="Copy commands"
                >
                  {copiedCmd ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-indigo-300 space-y-1 overflow-x-auto mb-4">
                <div className="text-slate-500"># Run in project terminal:</div>
                <div>git init</div>
                <div>git add .</div>
                <div>git commit -m "Initial commit - Website code"</div>
                <div>git branch -M main</div>
                <div>git remote add origin {repoUrl}.git</div>
                <div className="text-amber-300">git push -u origin main</div>
              </div>
            </div>

            <div className="p-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-xs text-slate-400 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Git remote link has already been verified for your repo.</span>
            </div>
          </motion.div>
        </div>

        {/* Website Preview Cards / Architecture */}
        <div className="border border-slate-800 rounded-2xl bg-slate-800/30 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            <span>Website Application Architecture</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-800/80 border border-slate-700/60 rounded-xl">
              <Code2 className="w-5 h-5 text-blue-400 mb-2" />
              <div className="font-semibold text-white text-sm">Vite + React 19</div>
              <div className="text-xs text-slate-400 mt-1">High-performance full-stack website framework.</div>
            </div>

            <div className="p-4 bg-slate-800/80 border border-slate-700/60 rounded-xl">
              <Archive className="w-5 h-5 text-amber-400 mb-2" />
              <div className="font-semibold text-white text-sm">Clean File Structure</div>
              <div className="text-xs text-slate-400 mt-1">Includes all source code, components & dependencies.</div>
            </div>

            <div className="p-4 bg-slate-800/80 border border-slate-700/60 rounded-xl">
              <Globe className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="font-semibold text-white text-sm">Production Ready</div>
              <div className="text-xs text-slate-400 mt-1">Configured for Cloud Run container hosting.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

