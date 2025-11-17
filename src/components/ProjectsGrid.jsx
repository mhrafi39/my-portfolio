
import React from 'react'
import ProjectCard from './ProjectCard'
import { useGitHubRepos } from '../hooks/useGitHub'
import sharesphereImg from '../assets/sharesphere.png';
import servoraImg from '../assets/servora.png';
import ecommerceImg from '../assets/ecommerce.png';
import rsmImg from '../assets/rsm.png';

const featuredProjects = [
  {
    title: 'SHARESphere',
    description: 'A resource-sharing community platform built for AUST students. Features OTP registration, admin verification, secure NID uploads, and real-time post updates.',
    image: sharesphereImg,
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Cloudinary'],
    features: ['OTP + Admin verification', 'JWT auth & protected routes', 'Redux notifications', 'Cloudinary integration', 'Responsive UI + dark mode'],
    link: 'https://github.com/mhrafi39/SHARESphere',
    liveDemo: '#',
    stars: 0,
    forks: 0
  },
  {
    title: 'SerVora',
    description: 'A local service booking system with AI integration. Allows users to book verified service providers and make payments online.',
    image: servoraImg,
    tags: ['Laravel 11', 'React.js', 'MySQL', 'Flask', 'AI', 'Stripe'],
    features: ['Role-based authentication', 'Service booking & verification', 'Stripe/SSLCommerz payment', 'AI-powered recommendations'],
    link: 'https://github.com/mhrafi39/SerVora',
    liveDemo: '#',
    stars: 0,
    forks: 0
  },
  {
    title: 'Flutter eCommerce App',
    description: 'A cross-platform shopping app built with Flutter & Firebase.',
    image: ecommerceImg,
    tags: ['Flutter', 'Firebase', 'Firestore', 'Dart'],
    features: ['Product CRUD', 'Realtime cart updates', 'User authentication', 'Cloud image upload'],
    link: 'https://github.com/mhrafi39',
    liveDemo: null,
    stars: 0,
    forks: 0
  },
  {
    title: 'Iftar Party Email System',
    description: 'Automated email confirmation system for event invitations.',
    image: '', // No asset provided
    tags: ['Node.js', 'Express.js', 'Nodemailer'],
    features: ['Custom HTML email templates', 'Environment-protected credentials'],
    link: 'https://github.com/mhrafi39',
    liveDemo: null,
    stars: 0,
    forks: 0
  },
  {
    title: 'RSM Game',
    description: 'A simple C++ game with graphics and player interaction.',
    image: rsmImg,
    tags: ['C++', 'graphics.h', 'SFML'],
    features: ['Basic game mechanics', 'Player movement & scoring system'],
    link: 'https://github.com/mhrafi39',
    liveDemo: null,
    stars: 0,
    forks: 0
  },
  {
    title: 'XpMarket',
    description: 'Full-stack MERN marketplace for buying, selling, and trading digital products',
    image: '', // No asset provided
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    features: ['User authentication', 'Product management', 'Secure transactions'],
    link: 'https://github.com/mhrafi39/XpMarket',
    liveDemo: null,
    stars: 0,
    forks: 0
  }
]

export default function ProjectsGrid() {
  const { repos, loading, error } = useGitHubRepos('mhrafi39');

  // Merge GitHub stats with featured projects
  const projectsWithStats = featuredProjects.map(project => {
    const repoName = project.link.split('/').pop();
    const githubRepo = repos.find(repo => repo.title === repoName);
    
    if (githubRepo) {
      return {
        ...project,
        stars: githubRepo.stars,
        forks: githubRepo.forks
      };
    }
    return project;
  });

  if (loading) {
    return (
      <div className="projects-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="project-card skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    console.error('GitHub API Error:', error);
  }

  return (
    <div className="projects-grid">
      {projectsWithStats.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  )
}
