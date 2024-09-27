import Grid from '@mui/material/Grid2';
import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
import Grow from '@mui/material/Grow';
import { useState, useEffect } from 'react';

export default function Projects({ projects }) {
    // 애니메이션을 위한 상태 관리
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        // 페이지가 로드되면 애니메이션 시작
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
                            style={{ transformOrigin: '0 0 0' }} 
                            timeout={500 + index * 300} // 각 항목의 애니메이션 딜레이
                            key={aProject.id}
                        >
                            <Grid item xs={12} sm={6} md={4} style={{ display: 'flex' }}>
                                <ProjectItem data={aProject} style={{ flexGrow: 1, minHeight: '400px' }} />
                            </Grid>
                        </Grow>
                    ))}
                </Grid>
            </Layout>
        </>
    )
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
