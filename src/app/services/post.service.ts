import {Subject} from 'rxjs';

export class PostService{
    
    emitPostSubject(){
        this.postSubject.next(this.posts.slice());
    }

    postSubject = new Subject<any[]>();
    
    private posts = [
        {
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Encore un post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            loveIts: 0,
            created_at: new Date()
        }
      ];

    likePost(index: number){
        this.posts[index].loveIts++;
    }  

    dislikePost(index: number){
        this.posts[index].loveIts--;
    }

    deletePost(index: number){
        this.posts.splice(index, 1);
        this.emitPostSubject();
    }

    addPost(title: string, content: string){
        const post = {
            title: '',
            content: '',
            loveIts: 0,
            created_at: new Date()
        }
        post.title = title;
        post.content = content;
        this.posts.unshift(post);
        this.emitPostSubject();

    }
}