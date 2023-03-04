import SectionHeading from "../heading/SectionHeading";
import RecentSingleWork from "./RecentSingleWork";
import './recentWorks.scss';

export default function RecentWork({ }) {

    return (
        <div className="works">
            <SectionHeading title="Recent Work" />

            <div className="works__wrapper">
                <RecentSingleWork title='Project 1' imgSrc='/images/works/project-1.jpg' description="d typesetting industry. Lorem Ipsum has been the industry's" />
                <RecentSingleWork title='Project 2' imgSrc='/images/works/project-2.jpg' description="d typesetting industry. Lorem Ipsum has been the industry's" />
                <RecentSingleWork title='Project 3' imgSrc='/images/works/project-3.jpg' description="d typesetting industry. Lorem Ipsum has been the industry's" />
                <RecentSingleWork title='Project 1' imgSrc='/images/works/project-1.jpg' description="d typesetting industry. Lorem Ipsum has been the industry's" />
            </div>
        </div>
    )
}