import React, { ReactNode } from 'react';
import { FaJava } from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiSpringboot,
  SiHibernate,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiRedis,
  SiFirebase,
  SiApachekafka,
  SiRabbitmq,
  SiDocker,
  SiJenkins,
  SiNginx,
  SiAmazonwebservices,
  SiGooglecloud,
  SiTerraform,
  SiJest,
  SiTailwindcss,
  SiMui,
  SiSwagger,
  SiJira,
} from 'react-icons/si';

interface Skill {
  icon: ReactNode;
  label: string;
}

const renderIcon = (Icon: any, color: string, title: string) => {
  return React.createElement(Icon, { color, title });
};

const skillLogos: Skill[] = [
  // --- Languages ---
  {
    icon: renderIcon(FaJava, "#ED8B00", "Java"),
    label: 'Java',
  },
  {
    icon: renderIcon(SiJavascript, "#F7DF1E", "JavaScript"),
    label: 'JavaScript',
  },
  {
    icon: renderIcon(SiTypescript, "#3178C6", "TypeScript"),
    label: 'TypeScript',
  },
  {
    icon: renderIcon(SiHtml5, "#E34F26", "Html5"),
    label: 'Html5',
  },
  {
    icon: renderIcon(SiCss3, "#1572B6", "CSS3"),
    label: 'CSS3',
  },

  // --- Backend & Frameworks ---
  {
    icon: renderIcon(SiSpringboot, "#6DB33F", "Spring Boot"),
    label: 'Spring Boot',
  },
  {
    icon: renderIcon(SiHibernate, "#59666C", "Hibernate"),
    label: 'Hibernate',
  },
  {
    icon: renderIcon(SiNodedotjs, "#339933", "Node.js"),
    label: 'Node.js',
  },
  {
    icon: renderIcon(SiNextdotjs, "#000000", "NextJS"), 
    label: 'NextJS',
  },
  {
    icon: renderIcon(SiReact, "#61DAFB", "React"),
    label: 'React',
  },
  {
    icon: renderIcon(SiRedux, "#764ABC", "Redux"),
    label: 'Redux',
  },
  {
    icon: renderIcon(SiTailwindcss, "#06B6D4", "Tailwind CSS"),
    label: 'Tailwind CSS',
  },
  {
    icon: renderIcon(SiMui, "#007FFF", "Material UI"),
    label: 'Material UI',
  },
  {
    icon: renderIcon(SiJest, "#C21325", "Jest"),
    label: 'Jest',
  },

  // --- Databases ---
  {
    icon: renderIcon(SiOracle, "#F80000", "Oracle"),
    label: 'Oracle',
  },
  {
    icon: renderIcon(SiMysql, "#4479A1", "MySQL"),
    label: 'MySQL',
  },
  {
    icon: renderIcon(SiPostgresql, "#4169E1", "PostgreSQL"),
    label: 'PostgreSQL',
  },
  {
    icon: renderIcon(SiMongodb, "#47A248", "MongoDB"),
    label: 'MongoDB',
  },
  {
    icon: renderIcon(SiRedis, "#DC382D", "Redis"),
    label: 'Redis',
  },
  {
    icon: renderIcon(SiFirebase, "#FFCA28", "Firebase"),
    label: 'Firebase',
  },

  // --- Messaging ---
  {
    icon: renderIcon(SiApachekafka, "#231F20", "Kafka"),
    label: 'Kafka',
  },
  {
    icon: renderIcon(SiRabbitmq, "#FF6600", "RabbitMQ"),
    label: 'RabbitMQ',
  },

  // --- DevOps & Cloud ---
  {
    icon: renderIcon(SiAmazonwebservices, "#FF9900", "AWS"),
    label: 'AWS',
  },
  {
    icon: renderIcon(SiDocker, "#2496ED", "Docker"),
    label: 'Docker',
  },
  {
    icon: renderIcon(SiJenkins, "#D24939", "Jenkins"),
    label: 'Jenkins',
  },
  {
    icon: renderIcon(SiNginx, "#009639", "Nginx"),
    label: 'Nginx',
  },
  {
    icon: renderIcon(SiGooglecloud, "#4285F4", "Google Cloud"),
    label: 'Google Cloud',
  },
  {
    icon: renderIcon(SiTerraform, "#7B42BC", "Terraform"),
    label: 'Terraform',
  },

  // --- Tools ---
  {
    icon: renderIcon(SiGit, "#F05032", "Git"),
    label: 'Git',
  },
  {
    icon: renderIcon(SiSwagger, "#85EA2D", "Swagger"),
    label: 'Swagger',
  },
  {
    icon: renderIcon(SiJira, "#0052CC", "Jira"),
    label: 'Jira',
  },
];

export default skillLogos;