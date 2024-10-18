import React from 'react';
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import photos from "../Assets/photos";
import PageHeader from './PageHeader';

export default function Gallery() {    
const [index, setIndex] = useState(-1);
const [width, setWidth] = useState(100);
const [layout, setLayout] = useState("rows");
const [columns, setColumns] = useState(1);
const [spacing, setSpacing] = useState(10);
const [padding, setPadding] = useState(0);
const [targetRowHeight, setTargetRowHeight] = useState();
const [openReader, setOpenReader] = useState(false);

  return (
    <>
        <PageHeader title="Gallery"/>
        <Container className='pt-4'>
            <PhotoAlbum
            onClick={({ index: current }) => setIndex(current)}
            photos={photos}
            layout={layout}
            columns={columns}
            spacing={spacing}
            padding={padding}
            targetRowHeight={targetRowHeight}
            render={{
                wrapper: ({ style, ...rest }) => (
                <div
                    style={{
                    ...style,
                    borderRadius: padding > 2 ? "4px" : 0,
                    boxShadow:
                        spacing + padding > 0
                        ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
                        : "none",
                    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    }}
                    {...rest}
                />
                ),
            }}
            /> 
            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </Container>
    </>
  );
}


