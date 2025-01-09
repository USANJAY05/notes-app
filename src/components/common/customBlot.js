import Quill from "quill";

// Extend Quill to create a custom embed blot
const BlockEmbed = Quill.import('blots/block/embed');

class VideoEmbed extends BlockEmbed {
  static create(value) {
    const node = super.create();
    node.setAttribute('src', value);
    node.setAttribute('frameborder', '0');
    node.setAttribute('allowfullscreen', 'true');
    return node;
  }

  static value(node) {
    return node.getAttribute('src');
  }
}

VideoEmbed.blotName = 'video';
VideoEmbed.tagName = 'iframe';
Quill.register(VideoEmbed);
