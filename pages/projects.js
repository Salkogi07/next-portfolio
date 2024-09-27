import Grid from '@mui/material/Grid'; // Grid 대신 사용
import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
import Grow from '@mui/material/Grow';
import { useState, useEffect } from 'react';

export default function Projects({ projects }) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <>
            <Layout>
                <Head>
                    <title>김동우의 포트폴리오</title>
                    <meta name="description" content="나의 포트폴리오" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>프로젝트</h1>
                <span className='project_Length'>총 프로젝트 : {projects.results?.length}</span>
                <Grid container spacing={3} justifyContent="center">
                    {projects && projects.results.map((aProject, index) => (
                        <Grow 
                            in={checked} 
                            sx={{ transformOrigin: '0 0 0' }} // sx로 스타일 지정
                            timeout={500 + index * 300} 
                            key={aProject.id}
                        >
                            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                                <ProjectItem data={aProject} sx={{ flexGrow: 1, minHeight: '400px' }} />
                            </Grid>
                        </Grow>
                    ))}
                </Grid>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            Accept: "application/json",
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({ page_size: 100 })
    };
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
    const projects = await res.json();

    return {
        props: { projects },
    }
}
