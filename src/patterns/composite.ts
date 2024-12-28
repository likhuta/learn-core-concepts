abstract class Component {
    protected parent!: Component | null;
    protected price: number | null;

    public setParent(parent: Component | null) {
        this.parent = parent;
    }

    public getParent(): Component | null {
        return this.parent;
    }

    public add(component: Component): void { }

    public remove(component: Component): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string | number
}

class Leaf extends Component {
    protected price;

    constructor(price: number) {
        super();
        this.price = price;
    }

    public operation(): string | number {
        // return 'Leaf';
        return this.price;
    }
}

class Composite extends Component {
    protected children: Component[] = [];
    
    public add(component: Component): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): string | number {
        // const results = [];

        // for (const child of this.children) {
        //     results.push(child.operation())
        // }
        // return `Branch(${results.join('+')})`;

        let results = 0;

        for (const child of this.children) {
            results += Number(child.operation());
        };

        return results;
    }
}

function clientCode(component: Component) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

    // ...
}

function clientCode2(component1: Component, component2: Component) {
    // ...

    if (component1.isComposite()) {
        component1.add(component2);
    }
    console.log(`RESULT: ${component1.operation()}`);

    // ...
}

export function launchExampleComposite() {
    const simple = new Leaf(1);
    console.log('Client: I\'ve got a simple component:');
    clientCode(simple);
    console.log('');

    const tree = new Composite();
    const branch1 = new Composite();
    branch1.add(new Leaf(10));
    branch1.add(new Leaf(20));
    const branch2 = new Composite();
    branch2.add(new Leaf(30));
    tree.add(branch1);
    tree.add(branch2);
    console.log('Client: Now I\'ve got a composite tree:');
    clientCode(tree);
    console.log('');

    console.log('Client: I don\'t need to check the components classes even when managing the tree:');
    clientCode2(tree, simple);
}


